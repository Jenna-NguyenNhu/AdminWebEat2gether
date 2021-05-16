// const user = usersData.find(
//   (users) => users.id.toString() === match.params.id
// );
const user = {};
console.log(match);

const userDetails = user
  ? Object.entries(user)
  : [
      [
        "id",
        <span>
          <CIcon className="text-muted" name="cui-icon-ban" /> Not found
        </span>,
      ],
    ];

{
  userDetails.map(([key, value], index) => {
    return (
      <tr key={index.toString()}>
        <td>{`${key}:`}</td>
        <td>
          <strong>{value}</strong>
        </td>
      </tr>
    );
  });
}
{
  /* <div>
                  {userRData.map((item, key) => (
                    <div key={key}>
                      <td>
                        <strong>Content: </strong>
                        {item.content}
                      </td>
                    </div>
                  ))}
                </div> */
}
{
  /* <tr>
                      <td>
                        <strong>Status: </strong>
                        {userRData.reports[0].content}
                      </td>
                    </tr> */
}
{
  /* Report */
}
