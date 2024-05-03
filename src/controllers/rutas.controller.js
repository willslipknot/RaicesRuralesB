import supabase from "../db1.js";

export const getActs = async (req, res) => {
    try {
        const { data: actividades, error } = await supabase
            .from('actividades')
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        res.json(actividades);
    } catch (error) {
        console.error(error);
        res.status(500).json(["Error interno del servidor"]);
    }
};

export const getAct = async (req, res) => {
    try {
        const { data: actividad, error } = await supabase
            .from('actividades')
            .select('*')
            .eq('id', req.params.id)
            .single();

        if (error) {
            throw new Error(error.message);
        }

        if (!actividad) {
            return res.status(404).json(["No existe la actividad"]);
        }

        res.json(actividad);
    } catch (error) {
        console.error(error);
        res.status(500).json(["Error interno del servidor"]);
    }
};

export const createAct = async (req, res) => {
    const { nombre, descripcion, tipo, coordenadasX, coordenadasY, hora_inicio, hora_fin } = req.body;
    const { filename: imagen } = req.body;
    const url = req.body.imageURL;
    const dep = "Cundinamarca";
    const mun = "San_Juan";

    console.log("url", url);

    if (!url) {
        return res.status(400).json({ error: "Debes subir una imagen" });
    }
    try {
        const direccion = `${coordenadasX}, ${coordenadasY}`;
        const { data: newActividad, error } = await supabase
            .from('actividades')
            .insert([
                { nombre, direccion, descripcion, tipo, imagen: url, coordenadasX, coordenadasY, hora_inicio, hora_fin, departamento: dep, municipio: mun }
            ]);

        if (error) {
            throw new Error(error.message);
        }

        console.log("Actividad creada correctamente");
        res.json({ message: "Actividad creada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


export const deleteAct = async (req, res) => {
    try {
        const { data: actividad, error } = await supabase
            .from('actividades')
            .delete()
            .eq('id', req.params.id);

        if (error) {
            throw new Error(error.message);
        }

        if (!actividad) {
            return res.status(405).json(["No existe la actividad, por lo que no se eliminó nada"]);
        }

        res.json({ message: "Actividad eliminada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json(["Error interno del servidor"]);
    }
};

export const putAct = async (req, res) => {
    try {
        const { nombre, descripcion, tipo, coordenadasX, coordenadasY, hora_inicio, hora_fin } = req.body;
        const { filename: imagen } = req.body;
        const direccion = `${coordenadasX}, ${coordenadasY}`;

        const url = req.body.imageURL;
        const dep = "Cundinamarca";
        const mun = "San_Juan";
        req.body.departamento = dep;
        req.body.municipio = mun;

        if (url) {
            req.body.imagen = url;
        }

        delete req.body.imageURL;

        const { error } = await supabase
            .from('actividades')
            .update(req.body)
            .eq('id', req.params.id);

        if (error) {
            throw new Error(error.message);
        }

        res.json({ message: "Actividad actualizada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json(["Error interno del servidor"]);
    }
}
