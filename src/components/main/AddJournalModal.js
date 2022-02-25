import React, { useState } from "react";
import styled from "styled-components";
import { Modal,Space,Button,Form, Input,DatePicker } from 'antd';

const AddJournalModal = ({visible,handleOk,onCancel}) => {
  return (
    <Modal title="일지 추가" visible={visible} onOk={handleOk} onCancel={onCancel}>
        <Form name="complex-form" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item label="학교 명">
            <Space>
              <Form.Item
                name="username"
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}
              >
                <Input style={{ width: 160 }} placeholder="○ ○ 초등학교" />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label="학년 반" style={{ marginBottom: 0 }}>
          <Space>
            <Form.Item
              name="year"
              rules={[{ required: true }]}
            >
              <Input placeholder="학년" />
            </Form.Item>
            <Form.Item
              name="month"
              rules={[{ required: true }]}
            >
              <Input placeholder="반" />
            </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label="생성년도">
            <Space>
              <Form.Item
                name="create-year"
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}
              >
                <DatePicker />
              </Form.Item>
            </Space>
          </Form.Item>
        </Form>
    </Modal>
    );
};

export default AddJournalModal;
