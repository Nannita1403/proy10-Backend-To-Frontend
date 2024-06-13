import { ToastContainer, toast } from 'react-toastify';


    export const notify = (text,background) => toast("Wow so easy !");

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  
