import React,{Component} from 'react';
import jobIcon from '../../img/job.png';
import api from '../../services/api';
import io from 'socket.io-client'

import './index.css';

export default class JobsCard extends Component{
    state = {
        jobs : []
    }

    async loadData(){
        const response = await api.get('/jobs');
        this.setState({jobs : response.data});
    }

    registerSocker(){
        const socket = io('https://fullstackbackend1.herokuapp.com/');
        //this.setState({jobs : newjob,...this.state.jobs});
        /*o ,... significa que, alem do newjob, está referenciando que também vai ter
        todo o conteudo presente no newjob*/
        
        socket.on('newjob',newjob => {
            this.setState({jobs : [newjob,...this.state.jobs]});
        });
    }

    componentDidMount(){
        this.registerSocker();
        this.loadData();
    }

    render(){
        return(
            <div className='jobsCard-container'>
                {
                    this.state.jobs.map(job =>(
                        <div className='jobs-container'>
                            <img src={jobIcon} alt=''/>
                            <div className='jobsCard-desc'>
                            <span>{job.description}</span>
                            <p>{job.company}</p>
                            <p>{job.company_address}</p>
                        </div>
                    </div>  
                    ))
                }
            </div>
        )
    }
}

