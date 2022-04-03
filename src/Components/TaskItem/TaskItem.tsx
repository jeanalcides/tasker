import './task-item.css'

export function TaskItem() {
    return (
        <>
            <div className="box-content-task">
                <div className="box-content-task-left">
                    <h3 className="item-task-name">Nome da Task</h3>
                    <p className="item-task-desc">Uma breve descrição da tarefa a ser executada.</p>
                </div>
                <div className="box-content-task-right">
                    <button className="task-button task-button-complete">Completo</button>
                    <button className="task-button task-button-delete">Deletar</button>
                </div>
            </div>
        </>
    )
}