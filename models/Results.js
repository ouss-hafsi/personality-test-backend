const mongoose = require ('../db/connection');

const resultSchema = new mongoose.Schema(
    {
        username: {type:String},
        clientname: {type: String},
        experientialAvoidance: {type: Number},
        rumination: {type: Number},
        emotionalMasking: {type: Number},
        shortTermFocus: {type: Number},
        responsePersistence: {type: Number},
        hostility: {type: Number},
        negativeAppraisal: {type: Number},
        answerQuestion0 : {type: String},
        answerQuestion1 : {type: String},
        answerQuestion2 : {type: String},
        answerQuestion3 : {type: String},
        answerQuestion4 : {type: String},
        answerQuestion5 : {type: String},
        answerQuestion6 : {type: String},
        answerQuestion7 : {type: String},
        answerQuestion8 : {type: String},
        answerQuestion9 : {type: String},
        answerQuestion10 : {type: String},
        answerQuestion11 : {type: String},
        answerQuestion12 : {type: String},
        answerQuestion13 : {type: String},
        answerQuestion14 : {type: String},
        answerQuestion15 : {type: String},
        answerQuestion16 : {type: String},
        answerQuestion17 : {type: String},
        answerQuestion18 : {type: String},
        answerQuestion19 : {type: String},
        answerQuestion20 : {type: String},
        answerQuestion21 : {type: String},
        answerQuestion22 : {type: String},
        answerQuestion23 : {type: String},
        answerQuestion24 : {type: String},
        answerQuestion25 : {type: String},
        answerQuestion26 : {type: String},
        answerQuestion27 : {type: String},
        answerQuestion28 : {type: String},
        answerQuestion29 : {type: String},
        answerQuestion30 : {type: String},
        answerQuestion31 : {type: String},
        answerQuestion32 : {type: String},
        answerQuestion33 : {type: String},
        answerQuestion34 : {type: String},
        answerQuestion35 : {type: String},
        answerQuestion36 : {type: String},
        answerQuestion37 : {type: String},
        answerQuestion38 : {type: String},
        answerQuestion39 : {type: String},
        answerQuestion40 : {type: String},
        answerQuestion41 : {type: String},
        answerQuestion42 : {type: String},
        answerQuestion43 : {type: String},
        answerQuestion44 : {type: String},
        answerQuestion45 : {type: String},
        answerQuestion46 : {type: String},
        answerQuestion47 : {type: String},
        answerQuestion48 : {type: String},
        answerQuestion49 : {type: String},
        answerQuestion50 : {type: String},
        answerQuestion51 : {type: String},
        answerQuestion52 : {type: String},
        answerQuestion53 : {type: String},
        answerQuestion54 : {type: String},
        answerQuestion55 : {type: String}
    },
    {
        timestamps: true,
    }
);

const Results = mongoose.model('Results', resultSchema);

module.exports = Results;