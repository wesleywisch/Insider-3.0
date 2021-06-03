import React, { useState, useEffect } from 'react';
import { Modal, ActivityIndicator } from 'react-native'

import { useIsFocused } from '@react-navigation/native';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem';
import ModalLink from '../../components/ModalLink';

import { getLinkSave, deleteLink } from '../../utils/storeLinks'

import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './style';

export default function MyLinks() {
    const isFocused = useIsFocused();

    const [links, setLinks] = useState();
    const [data, setData] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect( () =>{

        async function getLinks(){
            const result = await getLinkSave('storageLinks');
            setLinks(result);
            setLoading(false);
        }

        getLinks();

    }, [isFocused]);


    function handleItem(item){
        setData(item);
        setModalVisible(true);
    }

    async function handleDelete(id){
        const result = await deleteLink(links, id);
        setLinks(result);
    }

    return (
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />

            <Menu/>

            <Title>Meus Links</Title>

            { loading && (
                <ContainerEmpty>
                    <ActivityIndicator color="#FFF" size={25} />
                </ContainerEmpty>
            )}

            {!loading && links.length === 0 && (
                <ContainerEmpty>
                    <WarningText>Você infelismente não possui nenhum link salvo! :( </WarningText>
                </ContainerEmpty>
            )}

            <ListLinks 
             data={links}
             keyExtractor={ (item) => String(item.id) }
             renderItem={ ({ item }) => <ListItem data={item} selectedItem={ handleItem } deleteItem={ handleDelete } /> }
             contentContainerStyle={{paddingBottom: 22}}
             showVerticalScrollIndicator={false}
            />

        <Modal visible={modalVisible} transparent animationType="slide">
            <ModalLink onClose={ () => setModalVisible(false) } data={data} />
        </Modal>

        </Container>
    )
}