export function Testimonials() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-800 italic">
            “Desde que llegué a M2, duplicamos nuestras visitas y logramos cerrar más rápido. Es mucho más que un cowork, es un ecosistema.”
          </p>
          <div className="mt-4 font-semibold">Camila R. – Corredora</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-800 italic">
            “Tener bancos y clientes en el mismo espacio físico y digital nos cambió la vida. Cierro desde mi notebook.”
          </p>
          <div className="mt-4 font-semibold">Jorge T. – Ejecutivo Comercial</div>
        </div>
      </div>
    </section>
  );
}
