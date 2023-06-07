import {RiShutDownLine} from 'react-icons/ri'
import styled from 'styled-components';
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/samuelAnjos.png" alt="foto usuário" />
                <div>
                    <span>  Bem-vindo</span>
                    <strong>Samuel</strong>
                </div>
        </Profile>

        <Profile>
       < RiShutDownLine/>
        </Profile>

        </Container>
    )
}

