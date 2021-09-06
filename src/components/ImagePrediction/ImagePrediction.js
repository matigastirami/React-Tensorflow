import React, { Component } from 'react';
import './ImagePrediction.css';

/** Material */

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class ImagePredictionComponent extends Component {
    
    constructor(props){
        super(props)
        this.predecirImagen = this.predecirImagen.bind(this);
    }

    state = {
        open: false,
    };

    predecirImagen() {
        
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Grid container spacing={24} style={{minHeight: '50%', marginTop: '65px', paddingLeft: '5px', paddingRight: '5px'}}>
                    <Grid item xs={6}>
                        <Card style={{textAlign: "center", minHeight: '50%'}}>
                            <CardContent>
                            <Typography variant="h5" component="h2" style={{paddingBottom: 25}}>
                                    Seleccione una imagen para analizar
                                </Typography>
                                <Grid item xs={12} style={{paddingBottom: 25}}><Input type="file"/></Grid>
                                <Button variant="contained" color="primary" style={{marginBottom: 25}} onClick={this.handleClickOpen}>
                                    Predecir
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{textAlign: "center"}}>
                            <CardContent>
                                <Typography variant="h5" component="h2" style={{paddingBottom: 25}}>
                                    Resultado
                                </Typography>
                                <Typography component="p" style={{paddingBottom: 25}}>
                                    { 'Es un rope' }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"IMPORTANTE"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Todavía no implementado
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                        ACEPTAR
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ImagePredictionComponent;