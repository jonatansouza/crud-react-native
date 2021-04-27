import React, { useState } from 'react';
import { ListItem, Icon, Avatar } from 'react-native-elements';

export default props => {
    const [expanded, setExpanded] = useState(false)
    const {options, user} = props;
    const handler = (option) => () => {
        setExpanded(false);
        option.handler(user);
    }
    return (
            <ListItem.Accordion
                content={
                    <>
                        <Avatar source={{uri: user.avatarUrl}} marginRight={20} />
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                {(options || []).map((option, i) => (
                    <ListItem key={i} onPress={handler(option)}>
                        <ListItem.Content>
                            <ListItem.Title>{option.label}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ListItem.Accordion>
    );
}