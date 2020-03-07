import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Button,ScrollView} from 'react-native';
import ImagePickerExample from "./UseImage"
import list_messages from './Message'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  // componentDidMount() {
    
    // fetch('http://ec2-13-235-67-142.ap-south-1.compute.amazonaws.com:8080/input/api/query/citizenProblemFeed', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     citizenID: '1e17b295-c432-46d2-b747-0ec20b4a5e76',
    //     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNwb25zZSI6eyJzdGF0dXMiOiIyMDAiLCJpc0F1dGhlbnRpY2F0ZWQiOiJ0cnVlIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJnb3Z0Il0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiMWUxN2IyOTUtYzQzMi00NmQyLWI3NDctMGVjMjBiNGE1ZTc2In19LCJpYXQiOjE1Njg2NTYxMjB9.A3yp5-AICn5uvstQNJqcOEMzVoqF1tma0123ZovVSZw',
       
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch(err=>console.log('erroravikant'+err))

//  fetch('http://ec2-13-235-67-142.ap-south-1.compute.amazonaws.com:8080/input/api/insert/problem', {
//       method: 'POST',
//       body: JSON.stringify({
//         areaID: 1,
//         citizenID:'c7fb4953-2596-4f4b-84a5-4a00463af249',
//         problemDescription: 'Road Broken PLEASE HELP',
//         problemTagID:1,
//         token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNwb25zZSI6eyJzdGF0dXMiOiIyMDAiLCJpc0F1dGhlbnRpY2F0ZWQiOiJ0cnVlIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJnb3Z0Il0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiMWUxN2IyOTUtYzQzMi00NmQyLWI3NDctMGVjMjBiNGE1ZTc2In19LCJpYXQiOjE1Njg2NTYxMjB9.A3yp5-AICn5uvstQNJqcOEMzVoqF1tma0123ZovVSZw'
       
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(err=>console.log('erroravikant'+err))

    
//     console.log('component did mount')
//   }

  render() {
   
    list_messages()
      return (
        <ScrollView>
        <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
   
      </View>
        </ScrollView>
            )
  
  }
}
