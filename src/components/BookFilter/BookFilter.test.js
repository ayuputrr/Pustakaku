import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

test('mengubah filter status buku', () => {
  const setFilterMock = jest.fn();
  render(<BookFilter filter="all" setFilter={setFilterMock} />);
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'baca' } });
  expect(setFilterMock).toHaveBeenCalledWith('baca');
});
