import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './style';
import ListItem from '../../components/ListItem';

export default function MyLinks() {
    return (
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />

            <Menu/>

            <Title>Meus Links</Title>

            <ListLinks 
             data={[{id: 1, link: "text.com"}, {id: 2, link: "text.com"} ]}
             keyExtractor={ (item) => String(item.id) }
             renderItem={ ({ item }) => <ListItem data={item} /> }
             contentContainerStyle={{paddingBotom: 20}}
             showVerticalScrollIndicator={false}
            />


        </Container>
    )
}