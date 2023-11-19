// Create web server
const express = require('express');
const app = express();
// Create server
const http = require('http');
const server = http.createServer(app);
// Create socket
const socketio = require('socket.io');
const io = socketio(server);
// Create mongoose
const mongoose = require('mongoose');
// Create path
const path = require('path');
// Create body-parser
const bodyParser = require('body-parser');
// Create session
const session = require('express-session');
// Create cookie-parser
const cookieParser = require('cookie-parser');
// Create connect-flash
const flash = require('connect-flash');
// Create passport
const passport = require('passport');
// Create passport-local
const LocalStrategy = require('passport-local').Strategy;
// Create passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');
// Create method-override
const methodOverride = require('method-override');
// Create moment
const moment = require('moment');
// Create dotenv
const dotenv = require('dotenv');
dotenv.config();
// Create User
const User = require('./models/user');
// Create Comment
const Comment = require('./models/comment');
// Create Post
const Post = require('./models/post');
// Create Like
const Like = require('./models/like');
// Create Reply
const Reply = require('./models/reply');
// Create Notification
const Notification = require('./models/notification');
// Create middleware
const middleware = require('./middleware');
// Create seedDB
const seedDB = require('./seedDB');
// Create cloudinary
const cloudinary = require('cloudinary').v2;
// Create multer
const multer = require('multer');
// Create multer-storage-cloudinary
const { CloudinaryStorage } = require('multer-storage-cloudinary');
// Create method-override
const { findById } = require('./models/user');
const { findByIdAndDelete } = require('./models/comment');
// Create dotenv
const dotenv = require('dotenv');
dotenv.config();
// Create method-override
const { findById } = require('./models/user');
const { findByIdAndDelete } = require('./models/comment');
// Create dotenv
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASEURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

// Set view engine
app.set('view engine', 'ejs');