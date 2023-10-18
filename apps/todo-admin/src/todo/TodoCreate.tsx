import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TodoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="task" multiline source="task" />
      </SimpleForm>
    </Create>
  );
};
