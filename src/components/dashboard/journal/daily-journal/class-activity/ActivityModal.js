import React from "react";
import styled from "styled-components";
import { Modal,Form, Input } from 'antd';
const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const optionsWithDisabled = [
  { label: 'journalRed', value: 'journalRed' },
  { label: 'journalGreen', value: 'journalGreen' },
  { label: 'journalBlue', value: 'journalBlue'},
];

const AcitivityModal = ({form,isModalVisible,handleCancel,onChange,onSubmit,error}) => {
  const { TextArea } = Input;
  return (
    <Modal title="교시 활동" visible={isModalVisible} onOk={onSubmit} onCancel={handleCancel}>
        <Form name="complex-form" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item label="활동 내용">
            <Form.Item
              noStyle
              rules={[{ required: true, message: 'Username is required' }]}
            >
              <TextArea rows={6} style={{ width: '90%' }} name="content" placeholder="내용을 입력하세요(100자 이내)" maxLength={100} onChange={onChange} value={form.content}/>
            </Form.Item>
          </Form.Item>
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Modal>
    );
};

export default AcitivityModal;
