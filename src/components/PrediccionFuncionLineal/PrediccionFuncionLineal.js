import React, { Component } from 'react';
import './PrediccionFuncionLineal.css';

import * as tf from '@tensorflow/tfjs'

class PrediccionFuncionLineal extends Component {

    constructor(props){
        super(props)
        this.model = tf.sequential();
        this.model.add(tf.layers.dense({units: 1, inputShape: [1]}));

        //Prepara el modelo para su entrenamiento especificando la perdida y el optimizador
        this.model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

        //Se definen valores de entrada y salida para entrenar a la red neuronal
        const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
        const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

        //Llamo a la funcion fit para entrenar el modelo y le paso los valores de ejemplo
        this.model.fit(xs, ys, { epochs: 500 }).then(() => {
            this.setState({trainedModel: this.model})
        })

        this.state = {
            aproximacion: '',
            valorX: '',
            trainedModel: null
        };

        this.aproximar = this.aproximar.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this)
    }



    async predecirValor(model, x){
        let valor = model.predict(tf.tensor2d([x], [1,1]))
        console.log(valor)
    }

    async createAndTrainModel(){
        return new Promise(async (resolve, reject) => {
            //Define un modelo de regresión lineal
            let model = tf.sequential();
            model.add(tf.layers.dense({units: 1, inputShape: [1]}));

            //Prepara el modelo para su entrenamiento especificando la perdida y el optimizador
            model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

            //Se definen valores de entrada y salida para entrenar a la red neuronal
            const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
            const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

            //Llamo a la funcion fit para entrenar el modelo y le paso los valores de ejemplo
            model.fit(xs, ys, { epochs: 500 }) //Epochs son la cantidad de veces que recorrerá los datos para entrenarse
                .then(() => {
                    resolve(model.predict(tf.tensor2d([10], [1, 1])));
                })
        })
    }

    aproximar(){
        if(!this.state.valorX || this.state.valorX === ""){
            alert("Debe ingresar un valor de x para poder estimar")
            return;
        }
        this.model.predict(tf.tensor2d([Number(this.state.valorX)], [1, 1])).data().then(value => {
            this.setState({aproximacion: value[0]})
        })
    }

    updateInputValue(evt) {
        this.setState({
          valorX: evt.target.value
        });
      }

    render(){
        //let model = this.createAndTrainModel();
        //    model.then((prediction) => {
        //        prediction.data().then(data => {
        //            console.log(data[0])
        //            this.setState({aproximacion: data[0]})
        //        })
        //    })

        

        //console.log(this.predecirValor(this.createAndTrainModel(), 10))
        return(
            <div>
                Predicción de valores de Y para funciones lineales
                <h1>Aproximación IA para (Y = 2X - 1): </h1>
                <label htmlFor="valorX">Valor de X:</label>
                <input id="valorX" type="text" value={this.state.valorX} onChange={evt => this.updateInputValue(evt)}/>
                <button onClick={this.aproximar}>Aproximar</button>
                <label htmlFor="valorAprox">Valor de Y aproximado</label>
                <input id="valorAprox" type="text" value={this.state.aproximacion} disabled={true}/>
            </div>
        )
    }
}

export default PrediccionFuncionLineal;