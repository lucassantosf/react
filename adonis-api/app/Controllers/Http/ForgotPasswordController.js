"use strict";

const crypto = require("crypto");
const moment = require("moment");
const User = use("App/Models/User");
const Mail = use("Mail");

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input("email");
      const user = await User.findByOrFail("email", email);

      user.token = crypto.randomBytes(10).toString("hex");
      user.token_created_at = new Date();

      await user.save();

      await Mail.send(
        ["emails.forgot_password"],
        {
          email,
          token: user.token,
          link: `${request.input("redirect_url")}?token=${user.token}`,
        },
        (message) => {
          message
            .to(user.email)
            .from("lucas@gmail.com", "Lucas Santos")
            .subject("Recuper senha");
        }
      );
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: "Algo nao deu certo, este email existe?" } });
    }
  }

  async update({ request, response }) {
    try {
      const { token, password } = request.all();

      const user = await User.findByOrFail("token", token);

      const tokenExperied = moment()
        .subtract("2", "days")
        .isAfter(user.token_created_at);

      if (tokenExperied) {
        return response
          .status(401)
          .send({ error: { message: "Token expirado" } });
      }

      user.token = null;
      user.token_created_at = null;
      user.password = password;

      await user.save();
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: "Algo nao deu certo" } });
    }
  }
}

module.exports = ForgotPasswordController;
