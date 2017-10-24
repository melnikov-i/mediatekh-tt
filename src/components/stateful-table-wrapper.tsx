import * as React from 'react';

/* Импорт интерфейсов */
import { IUser } from '@src/models';

/* Импорт дочернего компонента */
import StatefulTableConnected from '@src/connected/stateful-table-connected.usage';

/* Интерфейс передаваемых в компонент параметров */
export interface StatefulTableWrapperProps {
  userCollection: IUser[], // чтение коллекции пользователей
  addUserToRows: (userCollection: IUser[]) => any, // Добавляет коллекцию в таблицу
}

interface DefaultProps {
  userCollection: IUser[],
}

type PropsWithDefaults = StatefulTableWrapperProps & DefaultProps;

interface State {
  userCollectionLength: number,
}

/* Компонент */
export const StatefulTableWrapper: React.ComponentClass<StatefulTableWrapperProps> =
  class extends React.Component<PropsWithDefaults, State> {    
    static defaultProps: DefaultProps = {
      userCollection: [],
    }
    
    state: State = {
      userCollectionLength: this.props.userCollection.length,
    }

    componentWillReceiveProps({ userCollection, addUserToRows }: PropsWithDefaults) {
      if ( userCollection != null && userCollection !== this.props.userCollection ) {
        this.setState({ userCollectionLength: userCollection.length });
        addUserToRows(userCollection); // dispatch коллекцию в редьюсер таблицы
      }
    }

    shouldComponentUpdate({ userCollection }: PropsWithDefaults): boolean {
      return userCollection.length > this.props.userCollection.length;
    }

    render() {
      if ( this.state.userCollectionLength != 0 ) {
        return <StatefulTableConnected />;
      } else {
        return null;
      }
    }
  };