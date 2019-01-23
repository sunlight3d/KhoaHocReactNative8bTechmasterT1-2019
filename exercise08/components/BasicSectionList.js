import React, { Component } from 'react';
import {SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
import { sections } from '../data/fakeData';

export default class MusicsSectionList extends Component {

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <SectionList
                    renderItem={({ item, index }) => {
                        return (<SectionListItem item={item} index={index} >

                        </SectionListItem>);
                    }}
                    renderSectionHeader={({ section }) => {
                        return (<SectionHeader section={section} />);
                    }}
                    sections={sections}
                    keyExtractor={(item, index) => item.name}
                >

                </SectionList>
            </View>
        );
    }
}

class SectionListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    marginLeft: 20,
                    marginRight: 10,

                }}>{this.props.item.name}
                </Text>
                <Text style={{
                    fontSize: 16,
                    marginLeft: 20,
                    marginRight: 10,
                    color: 'rgba(0,0,0, 0.6)',
                }}>{this.props.item.description}
                </Text>
                <View style={{backgroundColor: 'rgb(77,120, 140)', height: 1, margin: 4, marginLeft: 20,marginRight: 10}}>
                </View>
            </View>
        );
    }
}
class SectionHeader extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'rgb(110,20,126)',
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>{this.props.section.title}
                </Text>
            </View>
        );
    }
}
