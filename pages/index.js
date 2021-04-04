import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { Component } from "react"; 


class ControlledFormComponent extends Component {  
  
  constructor(props) {  
    super(props);  
    this.state = {  
      videoName: ""  
    };  
    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);  
  }  
  
  onNameChangeHandler(e){  
    this.setState({  
      videoName: e.target.value  
    })  
  }  
  
  render() {  
    return (  
      <div className={styles.container}>  
        <Head>
          <title>Twitch video search service</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
        <h3>Поиск видео по каналу: </h3>  
        <br />  
        <form>  
          <label>Введите название канала: </label>  
          <input   
              type="text"   
              placeholder="lok1, например"  
              onChange={this.onNameChangeHandler} />  
        </form>   
        <hr/>  
        <p className={styles.description} >State of Component</p>        
          <pre>{JSON.stringify(this.state, null, 2) }</pre>       
          <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
        </main>
        
        <footer className={styles.footer}>

        </footer>

      </div>  
    );  
  }  
}  
  
export default ControlledFormComponent; 



