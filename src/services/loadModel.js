const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/submissionmlgc-robi-storage/model.json');
}
module.exports = loadModel;