import Container from "../../components/Container";
import Content from "../../components/Content";
import BackgroundImage from "../../components/ItemPage/BackgroundImage";
import PageTitle from "../../components/PageTitle/PageTitle";
import TitleStyle from "../../components/PageTitle/TitleStyle";
import TitleText from "../../components/PageTitle/TitleText";
import Description from "../../components/ItemPage/Description/Description";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../services/api"

export default function ItemPage(){

    const [selectedItem, setSelectedItem] = useState('');
    const {itemId} = useParams();

    useEffect(async() => {

            try{
                const res = await api.getItem(itemId);
                setSelectedItem(res.data);
            }
            catch(error){
                console.log(error)
            }
        
    },[])

    console.log(selectedItem);

return(
    <Container>
        <Content>
            <BackgroundImage src={selectedItem.itemPoster}/>
            <PageTitle>
                <TitleText>{selectedItem.itemName}</TitleText>
                <TitleStyle/>
            </PageTitle>
            <Description>
                <h1>Descrição:</h1>
                <span>{selectedItem.itemDescription}</span>
            </Description>

        </Content>
    </Container>
)

}
