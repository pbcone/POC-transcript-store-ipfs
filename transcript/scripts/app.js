

let transcriptEntree1 = {
  transcriptId:'6548dihivKd46aJdv6',
  userId:'4Gjdcs6jdeuv284gqjdcpo102',
  trainingStartDate:'',
  trainginCompletionDate:'',
  verificationSignature:'',
  title:'4-Cylinder Engine',
  description:'A great Engine for saving fuel, and preventing excessive power transfer to the ground',
  trainingSource:'FORD powerplant Detriot MI'
}
let transcriptEntree2 = {
  transcriptId:'546sd5vJbeYIUB61308',
  userId:'4Gjdcs6jdeuv284gqjdcpo102',
  trainingStartDate:'',
  trainginCompletionDate:'',
  verificationSignature:'',
  title:'4 Wheeel Drive',
  description:'Used to maximise traction in high power-output applications',
  trainingSource:'FORD powerplant Detriot MI'
}

let transcriptEntree3 = {
  transcriptId:'546sd5vJfsvaeav820r0v23',
  userId:'4Gjdcs6jdeuv284gqjdcpo102',
  trainingStartDate:'',
  trainginCompletionDate:'',
  verificationSignature:'',
  title:'Flashy Blue Paint Job',
  description:'Royal blue exterior paint to catch the eye of passerbys',
  trainingSource:'FORD powerplant Detriot MI'
}

let transcriptCollection = {
  objectID:'5clka5846sdfCDljks080wef',
  userID:'4Gjdcs6jdeuv284gqjdcpo102',
  exposedStartDate: '',
  exposedEndDate:'',
  attachedTranscripts : [
    transcriptEntree1,
    transcriptEntree2,
    transcriptEntree3
  ]
}

let userData = {
  userId:'4Gjdcs6jdeuv284gqjdcpo102',
  firstName:'Ford',
  lastName:'Ranger',
  email:'justasmalltruck@ford.com',
  photo:'',
  missionStatement:'I will get you where you are going, just not very fast, and I might not haul all your stuff'
}

function createTranscriptObject (transcript) {
    parsedTranscript = JSON.parse(JSON.stringify(transcript));
    let title = $("<b></b>").text(parsedTranscript.title);
    let description = $("<p></p>").text(parsedTranscript.description);

    $('#app').append(title,description);
}

$(document).ready(function(){
    parsedUser = JSON.parse(JSON.stringify(userData))
    $('#header').prepend(parsedUser.firstName, ' ', parsedUser.lastName, 's ');

    const map1= transcriptCollection.attachedTranscripts.map((transcriptItem) => {
        createTranscriptObject(transcriptItem);
    });
});
