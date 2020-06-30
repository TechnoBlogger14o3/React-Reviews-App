import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/Global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/Button';

const ReviewSchema = yup.object({
    title: yup
            .string()
            .required()
            .min(4),

    body: yup
            .string()
            .required()
            .min(8),

    rating: yup
            .string()
            .required()
            .test('is-num-1-5', 'Rating must be number betwen 1 to 5', (val) => {
                return parseInt(val) < 6 && parseInt(val) > 0
            })
})

export default function ReviewForm( { addReview }) {
    return(
        <View style = {globalStyles.container}>
            <Formik
                initialValues= {{ title: '', body: '', rating: ''}}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Actress Name'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />

                        <Text style = {globalStyles.errorText}>
                            {props.touched.title && props.errors.title}
                        </Text>

                        <TextInput
                            multiline minHeight = {100}
                            style={globalStyles.input}
                            placeholder='Description'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />

                        <Text style = {globalStyles.errorText}>
                            {props.touched.body && props.errors.body}
                        </Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            keyboardType={'numeric'}
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                            value={props.values.rating}
                        />

                        <Text style = {globalStyles.errorText}>
                            {props.touched.rating && props.errors.rating}
                        </Text>

                        <FlatButton 
                            text='submit'
                            onPress={props.handleSubmit}/>
                    </View>
    )}
            </Formik>
        </View>
    )
}