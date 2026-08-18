import { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';

function DeleteConfirmModal() {
    return (
        <Modal>
            <h2>Вы действительно хотите удалить задачу?</h2>
            <button>ок</button>
            <button>нет</button>
        </Modal>
    )
}