import React, { useState } from "react";
import styled from "styled-components";
import { Modal,Space,Button,Form, Input,DatePicker,Radio } from 'antd';
import {commonColor} from '../../lib/styles/commonColor.js';
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

const AddJournalModal = ({visible,onSubmit,onChange,onCancel,form,error}) => {
  return (
    <Modal title="일지 추가" visible={visible} onOk={onSubmit} onCancel={onCancel}>
        <Form name="complex-form" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item label="학교 명">
            <Space>
              <Form.Item
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}
              >
                <Input style={{ width: 160 }} name="schoolName" placeholder="○ ○ 초등학교" onChange={onChange} value={form.schoolName} />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label="학년 반" style={{ marginBottom: 0 }}>
          <Space>
            <Form.Item
              rules={[{ required: true }]}
            >
              <Input placeholder="학년" type="number" name="gradeNum" onChange={onChange} value={form.gradeNum} />
            </Form.Item>
            <Form.Item
              
              rules={[{ required: true }]}
            >
              <Input placeholder="반" type="number" name="classroomNum" onChange={onChange} value={form.classroomNum}/>
            </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label="생성년도">
            <Space>
              <Form.Item
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}
              >
                <DatePicker name="createDate" onChange={onChange} value={form.createDate}/>
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label="테마색상">
            
            <Radio.Group
              name="themeColor"
              onChange={onChange}
              value={form.themeColor}
              optionType="button"
              buttonStyle="solid"
            >
              <Space>
              <Radio.Button value={'journalRed'}>journalRed</Radio.Button>
              <Radio.Button value={'journalGreen'}>journalGreen</Radio.Button>
              <Radio.Button value={'journalBlue'}>journalBlue</Radio.Button>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Modal>
    );
};

export default AddJournalModal;
