import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";


const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    const onSubmit = data => {
        dispatch(addTask(data));
        onCancel();
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="w-full rounded-md" {...register("title")} />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" className="w-full rounded-md" {...register("description")} />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="date">Deadline</label>
                    <input type="date" name="date" id="date" className="w-full rounded-md" {...register("date")} />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="assignTo">Assign to</label>
                    <select name="assignedTo" id="assignedTo" className="w-full rounded-md" {...register("assignedTo")}>
                        <option value="Mir Hussain">Mir Hussain</option>
                        <option value="Mezba Abedin">Mezba Abedin</option>
                        <option value="Mizanur Rahman">Mizanur Rahman</option>
                        <option value="Tanmoy Parvez">Tanmoy Parvez</option>
                        <option value="Rahatul Islam">Rahatul Islam</option>
                        <option value="Mehedi Anik">Mehedi Anik</option>
                        <option value="Anisur Rahman">Anisur Rahman</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label className="mb-2" htmlFor="priority">Priority</label>
                    <select name="priority" id="priority" className="w-full rounded-md" {...register("priority")}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-primary">submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;