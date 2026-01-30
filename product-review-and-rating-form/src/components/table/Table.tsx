import { FormTypes } from '../../types/form.types';
//import '../../styles/table.style.css';
interface Props {
  records: (typeof FormTypes.data)[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}
const Table = ({ records, onEdit, onDelete }: Props) => {
  return (
    <div className="table-section">
      <div className="table-heading">
        <h2>Submitted Reviews</h2>
      </div>
      <div className="table-container">
        <table id="recordsTable">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product SKU</th>
              <th>Purchase Date</th>

              <th>Overall Rating</th>
              <th>Quality Rating</th>
              <th>Value Rating</th>
              <th>Delivery Rating</th>
              <th>Service Rating</th>

              <th>Review Title</th>
              <th>Detailed Review</th>
              <th>Product Tags</th>
              <th>Recommend Produce</th>

              <th>Would Buy Again</th>
              <th>Make Review Public</th>
              <th>Agree to Terms</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.sku}</td>
                <td>{record.date}</td>

                <td>{'★'.repeat(record.ratings.overall)}</td>
                <td>{'★'.repeat(record.ratings.quality)}</td>
                <td>{'★'.repeat(record.ratings.value)}</td>
                <td>{'★'.repeat(record.ratings.delivery)}</td>
                <td>{'★'.repeat(record.ratings.service)}</td>

                <td>{record.title}</td>
                <td>{record.detail}</td>
                <td>{record.tags.join(', ')}</td>
                <td>{record.recommend}</td>

                <td>{record.wouldBuyAgain ? 'Yes' : 'No'}</td>
                <td>{record.makeReviewPublic ? 'Yes' : 'No'}</td>
                <td>{record.agreeToTerms ? 'Yes' : 'No'}</td>

                <td>
                  <button onClick={() => onEdit(index)}>Edit</button>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
