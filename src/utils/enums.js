const Enum_Rol = {
    ADMINISTRADOR: 'Administrador',
    ESTUDIANTE: 'Estudiante',
    LIDER: 'Líder',
  };
  
  const Enum_EstadoUsuario = {
    PENDIENTE: 'Pendiente',
    AUTORIZADO: 'Autorizado',
    NO_AUTORIZADO: 'No autorizado',
  };
  
  const Enum_EstadoProyecto = {
    ACTIVO: 'Activo',
    INACTIVO: 'Inactivo',
  };
  
  const Enum_TipoObjetivo = {
    GENERAL: 'General',
    ESPECIFICO: 'Específico',
  };

  const Enum_FaseProyecto = {
    INICIADO: 'Iniciado',
    DESARROLLO: 'Tesarrollo',
    TERMINADO:'Terminado',
    NULO:'Nulo'
  };

  const Enum_Inscripcion = {
    ACEPTADA:'Aceptada',
    RECHAZADA:'Rechazada',
    EN_ESPERA:'En espera'
  };
  
  export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_TipoObjetivo, Enum_FaseProyecto, Enum_Inscripcion};
