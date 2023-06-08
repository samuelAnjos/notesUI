import {Container, Brand, Menu, Search, Content, NewNote} from './styles';
import {FiPlus} from 'react-icons/fi'


import {Header} from '../../components/Header';
import {Note} from '../../components/Note';
import {Input} from '../../components/Input';
import {Section} from '../../components/Section';
import {ButtonText} from '../../components/ButtonText';

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RockeNotes</h1>
            </Brand>

            <Header />

            <Menu> 
               <li> <ButtonText title="Todos"/></li> 
               <li> <ButtonText title="React"/></li> 
               <li> <ButtonText title="Node js"/></li> 
            
            </Menu>

            <Search>

                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                 <Section title="Minhas notas">
                    <Note data={{
                        title: 'react',
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rockt'},
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote>
              <FiPlus/>
              Criar nota
            </NewNote>
        </Container>

        )
}