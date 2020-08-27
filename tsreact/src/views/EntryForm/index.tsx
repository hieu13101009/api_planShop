import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import {Message}  from '../../container/HomeContainer/actions/types';
import {getMessage} from "../../container/HomeContainer/actions/actions";
import useStyles from './styles';

const EntrySchema = yup.object().shape({
    user: yup.string().trim().required('Điền tên vào bạn êi !!'),
    message: yup.string().trim().min(10, 'Nhiều hơn 10 ký tự').max(20, 'Viết ít thôi!!!!!').required(),
});

const EntryForm: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm<Message>({
        resolver: yupResolver(EntrySchema),
    });
    const onSubmit= (data: Message): void => {
        // dispatch(getMessage(data));
        reset();
    };

    // console.log('errors',errors);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.formContainer}
            noValidate
            autoComplete="off"
        >
            <TextField
                inputRef={register}
                variant="outlined"
                fullWidth
                name="user"
                label="user"
                // error={!!errors.user}
                // helperText={errors.user ? errors.user.message : ''}
            />
            <TextField
                inputRef={register}
                variant="outlined"
                multiline
                rows={3}
                fullWidth
                name="message"
                label="message"
                // error={!!errors.message}
                // helperText={errors.message ? errors.message.message : ''}
            />
            <Box display="flex" justifyContent="flex-end">
                <Button type="submit" variant="contained" color="primary">
                    add entry
                </Button>
            </Box>
        </form>
    );
};

export default EntryForm;
