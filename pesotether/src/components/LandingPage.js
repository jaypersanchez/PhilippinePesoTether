import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import { 
    TextField,
    Button, 
    Avatar, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText,
    DialogTitle, 
    Dialog, 
    DialogContent,
    Grid,
    Typography,
    IconButton,
    Divider, 
    FormControlLabel,
    Colors,
    Checkbox,
    DialogActions,
} from '@mui/material';

const LandingPage = () => {
    const [account, setAccount] = useState();
    const [chainid, setChainId] = useState();
    const provider = detectEthereumProvider();
    
    if(window.ethereum ) {
        window.ethereum.request({method: 'eth_requestAccounts'})
        .then( _account => {
            setAccount(_account)
            console.log(`Metamask Address ${account}`)
        })
    }

    
    return (
            <section>

                <div className="container">
                    <div>
                    <h2>
                        Experimental Philippine Peso Tether
                    </h2>
                    <p>
                            Tether Philippine Peso to equities from Philippines
                    </p>
                    </div>
                    <div>
                        Current Account {account}
                    </div>
                </div>
            </section>
        
    )
}

export default LandingPage