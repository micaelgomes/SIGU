import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiCheck, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import getValidationError from '../../utils/getValidationErrors';
import { useAuth } from '../../context/auth';

import * as S from './styled';
import Button from '../../components/Button';

interface SingUpData {
  name: string;
  email: string;
  password: string;
}

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signUp } = useAuth();

  const handleSubmit = useCallback(
    async (data: SingUpData) => {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome de usuário obrigatório'),
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

        await signUp({
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
    [signUp],
  );

  return (
    <S.SingInWrapper>
      <S.SectionLogin>
        <S.SectionLoginForm>
          <header>
            <h1>
              <span>Criar Conta</span>
              <b>SIGU</b>
            </h1>
            <small>sistema integrado de gestão de usuários</small>
          </header>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <section>
              <Input
                name="name"
                type="text"
                placeholder="Nome de usuário"
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
                type="password"
                placeholder="Sua senha"
                icon={FiLock}
              />
            </section>

            <Button type="submit" label="criar conta" icon={FiCheck} />
          </Form>

          <p>
            Já possui uma conta?
            <Link to="/">entrar</Link>
          </p>
        </S.SectionLoginForm>
      </S.SectionLogin>
    </S.SingInWrapper>
  );
};

export default SingUp;
