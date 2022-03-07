import React, {useEffect,useState,useCallback} from "react";
import styled from "styled-components";
import { Card } from 'antd';
import palette from '../../../lib/styles/palette';
import {commonColor} from '../../../lib/styles/commonColor.js';
import { Menu, Dropdown,message, Button,Space} from 'antd';
import { IoMdSettings } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import EditMemoModal from "./EditMemoModal.js";
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm,memoUpdate,memoDelete} from '../../../modules/journal';
import AskModal from '../../../components/common/AskModal.js';
const MemoItemBlock = styled.div`
    width: 90%;
    height:250px;
    border-radius:10px;
    border-color:${palette.gray[4]};
    background:white;
    margin-bottom:20px;
    border: 1px solid #f0f0f0;
    .memoHead{
        min-height: 36px;
        font-size: 14px;
        margin-bottom: -1px;
        padding: 0 12px;
        color: #000000d9;
        font-weight: 500;
        background: 0 0;
        border-bottom: 1px solid #f0f0f0;
        border-radius: 2px 2px 0 0;
        display: flex;
        align-items: center;
        .buttonArea {
            float: right;
            margin-left: auto;
            padding: 16px 0;
            color: #000000d9;
            font-weight: 400;
            font-size: 14px;
            .editButton{
                color : ${commonColor.journalDarkBlue};
                border-color : ${commonColor.journalDarkBlue};
            }
            .cancelButton{
                color : ${commonColor.journalDarkRed};
                border-color : ${commonColor.journalDarkRed};
            }
        }
    }
    .memoContent{
        padding: 12px;
    }
`;
const DropdownMenu = ({memoItem}) =>{
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const {form,memoEditLoading} = useSelector(({journal,loading}) => ({
        form: journal.edit.memo,
        memoEditLoading: loading['journal/MEMO_EDIT']
    }));
    const showModal = () => {
        const ItemValues = {
            id : memoItem._id,
            title : memoItem.title,
            content: memoItem.content
        }
        dispatch(initializeForm({
            form: 'edit',
            type: 'memo',
            values: ItemValues
        }));
        setIsEditModalVisible(true);
    };
    const handleCancel = () => {
        setIsEditModalVisible(false);
      };
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'edit',
                type: 'memo',
                key: name,
                value
            })
        );
    };
    const onSubmit = e => {
        e.preventDefault();
        const {id,title,content} = form;
        if([title,content].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        dispatch(memoUpdate({id,title,content}));
        setIsEditModalVisible(false);
    };

    const onDeleteItem = () =>{
        setIsDeleteModalVisible(true);
    };

    const onCancel = () => {
        setIsDeleteModalVisible(false);
    };

    const onConfirm = () => {
        dispatch(memoDelete({id:memoItem._id}));
        setIsDeleteModalVisible(false);
    };


return (
    <Menu >
      <Menu.Item className="editButton" key="1" icon={<BiEdit size="15"/>} onClick={showModal}>
        수정
      </Menu.Item>
      <Menu.Item className="cancelButton" key="2" icon={<MdDelete size="15"/>} onClick={onDeleteItem}>
        삭제
      </Menu.Item>
      <EditMemoModal
        form={form}
        isModalVisible={isEditModalVisible}
        handleCancel={handleCancel}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}/>
      <AskModal
        description={'정말로 삭제하시겠습니까?'}
        visible={isDeleteModalVisible}
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
    </Menu>
  )
};
 
const MemoItem = ({memoItem}) => { 
  return ( 
        <MemoItemBlock size="small">
            <div className="memoHead">
                <div className="titleArea">{memoItem.title}</div>
                <div className="buttonArea">
                    <Space wrap>
                        <Dropdown overlay={<DropdownMenu memoItem={memoItem}/>}>
                            <Button size="small">
                                <IoMdSettings />
                            </Button>
                        </Dropdown>
                    </Space>
                </div>
            </div>
            <div className="memoContent">
            {memoItem.content}
            </div>
        </MemoItemBlock>
    );
};

export default React.memo(MemoItem);
