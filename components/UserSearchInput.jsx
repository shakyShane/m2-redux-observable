import React from 'react';

export default function UserSearchInput({ value, onChange }) {
  return (
    <input
      type='text'
      placeholder='Search for a GH user'
      onChange={(evt) => onChange(evt.target.value)}
    />
  );
}
