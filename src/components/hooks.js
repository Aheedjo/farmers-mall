import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
const speechSdk = require('microsoft-cognitiveservices-speech-sdk');

export const useSpeechToText = () => {
  const speechConfig = speechSdk.SpeechConfig.fromSubscription(process.env.REACT_APP_KEY, 'southafricanorth');
  speechConfig.speechRecognitionLanguage = 'en-NG';

  const audioConfig = speechSdk.AudioConfig.fromDefaultMicrophoneInput();
  const recognizer = new speechSdk.SpeechRecognizer(speechConfig, audioConfig);

  const speechToText = (onSuccess, onError) => {
    recognizer.recognizeOnceAsync(result => {
      if (result.reason === ResultReason.RecognizedSpeech) {
        if (onSuccess)
          onSuccess(result.text);
      } else {
        if (onError)
          onError(result);
      }
    });
  }

  return speechToText;
};