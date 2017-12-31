import mongoose from 'mongoose';
import { Router } from 'express';
import Smartphone from '../model/smartphone';
import bodyParser from 'body-parser';

export default({ config, db }) => {
    let api = Router();

    // CRUD - Create Read Update Delete


    // '/v1/smartphone/add' - Create
    api.post('/add', (req, res) => {
        let newSmartphone = new Smartphone();
        newSmartphone.name = req.body.name;

        newSmartphone.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Smartphone saved successfully' });
        });
    });

    // '/v1/smartphone' - Read
    api.get('/', (req, res) => {
        Smartphone.find({}, (err, smartphone) => {
           if (err) {
               res.send(err);
           }
           res.json(smartphone);
        });
    });

    // '/v1/smartphone/:id' - Read by id
    api.get('/:id', (req, res) => {
        Smartphone.findById(req.params.id, (err, smartphone) => {
            if (err) {
                res.send(err);
            }
            res.json(smartphone);
        });
    });

    // '/v1/smartphone/:id' - Update
    api.put('/:id', (req, res) => {
        Smartphone.findById(req.params.id, (err, smartphone) => {
            if(err){
                res.send(err)
            }
            smartphone.name = req.body.name;
            smartphone.save(err => {
                if (err){
                    res.send(err);
                }
                res.json({ message: "Smartphone successfully updated" });
            });
        });
    });

    // '/v1/smartphone/:id' - Delete
    api.delete('/:id', (req, res) => {
        Smartphone.remove({
            _id: req.params.id
        }, (err, smartphone) => {
           if (err) {
               res.send(err);
           }
           res.json({ message: "Smartphone successfully removed" })
        });
    });

    return api;
}