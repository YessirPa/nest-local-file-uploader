export const Environment = {
  port: 3500,
  baseUrl: 'http://localhost:3500',
  mediaServeRoot: '/uploads',
  mediaLocalFolderSaved: 'nest-local-uploads',
  databaseConfig: {
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'nest_file_upload_db',
  },
  //mediaServeRoot: '/nest-local-uploads',
};
