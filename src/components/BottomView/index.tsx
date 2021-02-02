import React, { useCallback, useRef } from 'react';
import { FiXCircle, FiUser, FiMail, FiLock, FiUserCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Dropzone from '../Dropzone';
import Input from '../Input';
import getValidationError from '../../utils/getValidationErrors';
import { useUser } from '../../context/users';

import * as S from './styled';
import Button from '../Button';

interface UserModel {
  name: string;
  email: string;
}

interface BottomViewProps {
  statusBottomView: boolean;
  toogleBottomView(): void;
  user: UserModel;
}

interface SingCredentials {
  name: string;
  email: string;
  password: string;
}

const BottomView: React.FC<BottomViewProps> = ({
  statusBottomView,
  toogleBottomView,
  user,
}) => {
  const formRef = useRef<FormHandles>(null);
  const { addUser } = useUser();

  const handleSubmit = useCallback(
    async (data: SingCredentials) => {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Este email é  inválido'),
        password: Yup.string()
          .min(6, 'Senha deve ter no mínimo 6 caracteres.')
          .required('Senha obrigatória'),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        await addUser({
          name: data.name,
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);

          return;
        }
      }

      console.log(data);
    },
    [addUser],
  );

  return (
    <>
      <S.Overlay
        statusBottomView={statusBottomView}
        onClick={toogleBottomView}
      />

      <S.BottomViewWrapper statusBottomView={statusBottomView}>
        <S.BottomViewHeader>
          <header>
            <h5>Adicionar um novo usuário</h5>

            <button onClick={toogleBottomView}>
              <FiXCircle size={24} />
            </button>
          </header>
        </S.BottomViewHeader>

        <S.BottomViewBody>
          <Form
            ref={formRef}
            initialData={{ name: user.name, email: user.email }}
            onSubmit={handleSubmit}
          >
            <section>
              <Dropzone />
            </section>

            <section>
              <Input
                name="name"
                type="text"
                placeholder="Nome de Usuário"
                icon={FiUser}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                icon={FiMail}
              />
              <Input
                name="password"
                type="text"
                placeholder="Sua senha"
                icon={FiLock}
              />
              <Button
                type="submit"
                label="adicionar usuário"
                icon={FiUserCheck}
              />
            </section>
          </Form>
        </S.BottomViewBody>
      </S.BottomViewWrapper>
    </>
  );
};

export default BottomView;
