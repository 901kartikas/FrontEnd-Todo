import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { Button,  Form, FormGroup, Label, Input} from 'reactstrap';
import { getDetailSubCategory, updateSubCategory } from "../Redux/actions/subTodoAction";


function EditSubTodo(props){
  
    const{match, dispatchGetSubTodoId,dispatchUpdateDetail} = props;
    const [activityTitle, setActivityTitle] = useState('');
    const [note, setNote] = useState ('');
    const [priority, setPriority] = useState('');
    const [todoID, setTodoID] = useState(0);
    const [todoCategoryID, setTodoCategoryID] = useState(0)

    console.log('ini props: ',props)
    console.log(match)
    useEffect(() => {
        console.log(match);
        const noteId = props.match.params.EditSubTodo;
    if (noteId) {
        dispatchGetSubTodoId(noteId, ({activityTitle, note, priority, todoCategoryID, todoID}) => 
        {
            setActivityTitle(activityTitle);
            setNote(note);
            setPriority(priority);
            setTodoCategoryID(todoCategoryID);
            setTodoID(todoID);
        });
      }
    }, [dispatchGetSubTodoId, match.params])

    const handleSubmit = (e) => {
      console.log('handleSubmit bisa nih');
      const noteId = props.match.params.EditSubTodo;
      const data = {activityTitle, note, priority, todoID, todoCategoryID };
      e.preventDefault();
      console.log(todoID, todoCategoryID)
      console.log('data', data)
      dispatchUpdateDetail(noteId, data , () => {
          console.log('bisaaaa');
      })
    }

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="activityTitle">Title</Label>
            <Input
              type="text"
              name="title"
              id="activityTitle"
              placeholder="with a placeholder"
              onChange={(e) => setActivityTitle(e.target.value)}
              value={activityTitle}
            />
          </FormGroup>

          <FormGroup>
            <Label for="note">Note</Label>
            <Input
              type="text"
              name="note"
              id="note"
              placeholder="with a placeholder"
              onChange={(e) => setNote(e.target.value)}
              value={note}
            />
          </FormGroup>
          <FormGroup>
            <Label for="priority">Priority</Label>
            <Input
              type="select"
              name="priority"
              id="priority"
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
            >
              <option value="penting">Penting</option>
              <option value="gapenting">Ga Penting</option>
            </Input>
          </FormGroup>

          <Button type="submit" color="primary" >
            Save
          </Button>
          <Button color="secondary">
            Cancel
          </Button>
        </Form>
      </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatchUpdateDetail: (id, data, onSuccess, onError) => 
        dispatch(updateSubCategory(id, data, onSuccess, onError)),
    
    dispatchGetSubTodoId: (id, onSuccess) => 
      dispatch(getDetailSubCategory(id, onSuccess))
})

export default connect(null,mapDispatchToProps)(EditSubTodo) ;