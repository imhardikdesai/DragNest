import React, { useCallback, useMemo } from 'react';
import { Button, DialogActions, Stack } from '@mui/material';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { filterUndefinedValues } from 'src/utils/utils';
import { handleSetEditModal, handleUpdateDefaultData } from 'src/redux/slices/template';
import { RootState } from 'src/redux/store';
import RHFSwitch from '../hook-form/rhf-switch';

const renderTextFiled = (key: any, name: string) => (
  <Stack spacing={3} sx={{ px: 3, mt: 2 }}>
    <RHFTextField name={key} label={name} />
  </Stack>
);
const renderSwitch = (key: any, name: string) => (
  <Stack spacing={3} sx={{ px: 3, mt: 2 }}>
    <RHFSwitch label={name} name={key} />
  </Stack>
);

const RenderForm = () => {
  const { editBlock, blocks } = useSelector((state: RootState) => state.template);
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    async (data: any) => {
      dispatch(handleUpdateDefaultData(filterUndefinedValues(data)));
      dispatch(handleSetEditModal(false));
    },
    [dispatch]
  );
  const defaultValues = useMemo(
    () => ({
      ...blocks.find((ele: any) => ele.uuid === editBlock?.uuid).defaultData,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const methods = useForm<any>({
    defaultValues,
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {editBlock?.config?.map((item: any) => {
        const { type, key, name } = item;
        if (type === 'string') {
          return renderTextFiled(key, name);
        }

        if (type === 'boolean') {
          return renderSwitch(key, name);
        }
        return null;
      })}
      <DialogActions>
        <Button onClick={() => dispatch(handleSetEditModal(false))}>Cancel</Button>
        <Button type="submit" variant="contained">
          Update
        </Button>
      </DialogActions>
    </FormProvider>
  );
};

export default RenderForm;
