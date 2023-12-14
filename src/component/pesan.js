// Formulir.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pesan = () => {
  const [nama, setNama] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [waktu, setWaktu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang disubmit:', { nama, noTelp, tanggal, waktu });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">Nama Pemesan:</label>
          <input
            type="text"
            className="form-control"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="noTelp" className="form-label">Nomor Telepon:</label>
          <input
            type="tel"
            className="form-control"
            id="noTelp"
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tanggal" className="form-label">Tanggal:</label>
          <input
            type="date"
            className="form-control"
            id="tanggal"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="waktu" className="form-label">Waktu:</label>
          <input
            type="time"
            className="form-control"
            id="waktu"
            value={waktu}
            onChange={(e) => setWaktu(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Pesan;
