import Item from "./Item";

const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;

/*
//arr好方便呀
const arr = [1, 2, 3, 4]
const List = () => {
    return <div className="list">
        {
            arr.map(item => <div>{item}</div>)
        }
    </div>
}

export default List;
*/

//const List = ({listData}) => { 注意listData两边的大括号
