import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import api from "../../services/api";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MembersActions from "../../store/ducks/members";

import Modal from "../Modal";
import Can from "../Can";
import Button from "../../styles/components/Button";
import { MembersList, Invite } from "./styles";

class Members extends Component {
  static propTypes = {
    closeMembersTotal: PropTypes.func.isRequired,
    getMembersRequest: PropTypes.func.isRequired,
    updateMemberRequest: PropTypes.func.isRequired,
    inviteMemberRequest: PropTypes.func.isRequired,
    members: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          user: PropTypes.shape({
            name: PropTypes.string,
          }),
          roles: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number,
              name: PropTypes.string,
            })
          ),
        })
      ),
    }).isRequired,
  };

  state = {
    roles: [],
  };

  async componentDidMount() {
    const { getMembersRequest } = this.props;

    getMembersRequest();

    const response = await api.get("roles");

    this.setState({
      invite: "",
      roles: response.data,
    });
  }

  handleInvite = (e) => {
    e.preventDefault();
    const { inviteMemberRequest } = this.props;
    const { invite } = this.state;

    inviteMemberRequest(invite);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRolesChange = (id, roles) => {
    const { updateMemberRequest } = this.props;
    updateMemberRequest(id, roles);
  };

  render() {
    const { closeMembersModal, members } = this.props;
    const { roles, invite } = this.state;

    return (
      <Modal size="big">
        <h1>Membros</h1>

        <Can checkPermission="invites_create">
          <Invite onSubmit={this.handleInvite}>
            <input
              name="invite"
              placeholder="Convidar para o time"
              value={invite}
              onChange={this.handleInputChange}
            />
            <Button type="submit">Enviar</Button>
          </Invite>
        </Can>
        <form>
          <MembersList>
            {members.data.map((member) => (
              <li key={member.id}>
                <strong>{member.user.name}</strong>
                <Can checkRole="administrator">
                  {(can) => (
                    <Select
                      isMulti
                      isDisabled={!can}
                      options={roles}
                      value={member.roles}
                      getOptionLabel={(role) => role.name}
                      getOptionValue={(role) => role.id}
                      onChange={(value) =>
                        this.handleRolesChange(member.id, value)
                      }
                    />
                  )}
                </Can>
              </li>
            ))}
          </MembersList>
          <Button onClick={closeMembersModal} filled={false} color="gray">
            Cancelar
          </Button>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MembersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Members);
