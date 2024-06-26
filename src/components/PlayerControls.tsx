import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import {PlaybackError} from './PlaybackError';
import {PlayPauseButton} from './PlayPauseButton';

const performSkipToNext = () => TrackPlayer.skipToNext();
const performSkipToPrevious = () => TrackPlayer.skipToPrevious();

export const PlayerControls: React.FC = () => {
  const playback = usePlaybackState();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={performSkipToPrevious}>
          <Text style={{color: 'white'}}>back</Text>
        </TouchableWithoutFeedback>
        <PlayPauseButton />
        <TouchableWithoutFeedback onPress={performSkipToNext}>
          <Text style={{color: 'white'}}>forward</Text>
        </TouchableWithoutFeedback>
      </View>
      <PlaybackError
        error={'error' in playback ? playback.error.message : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
