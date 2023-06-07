import { Container, Links, Content } from "./style"
import { Header} from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

export function Datails(){

  return (
    <Content> 
     <Header/>

    <main>
      <Content>

   

    <ButtonText title="Exluir nota "/>
    <h1>Introduçao ao Note</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Enim fuga quisquam libero quae quibusdam vel ullam officia. 
      Esse cupiditate laboriosam 
      ipsam nisi dolorem officiis omnis iusto! Sit delectus suscipit cumque!</p>
     <Section title="   Links Uteis">
      <Links>
        <li><a href="#">https://www.sanis.com</a></li>
      </Links>
     </Section>

     <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="node js"/>
     </Section>

     
      <Button title="Voltar"/>

      </Content>
    </main>
    </Content>
  )
}