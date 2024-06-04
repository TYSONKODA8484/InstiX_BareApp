// src/login/OtpVerification.js
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  otp: yup.string().length(6, 'OTP must be exactly 6 digits').required('OTP is required'),
});

const OtpVerification = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle OTP verification logic here
    Alert.alert('OTP Verified', 'Your account has been created successfully!');
    navigation.navigate('Main'); // Navigate to the bottom tab navigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter OTP</Text>
      <Text style={styles.instructions}>Please enter the OTP sent to your email</Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="otp"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="OTP"
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              maxLength={6}
            />
          )}
        />
        {errors.otp && <Text style={styles.error}>{errors.otp.message}</Text>}
      </View>

      <Button title="Verify OTP" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default OtpVerification;
