const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const {Pool} = require('pg')

const app = express()
app.use(cors())
app.use(express.json()) 

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password:"1234",
    port:"5432"
})

const PORT = "3000" || 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

app.get("/api/more", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, info FROM more");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/more2", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, info FROM more2");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/journey", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, headline, text FROM journey");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/ourservices", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, head, txt, price FROM ourservices");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/works", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, headline, category, time, text, bacgr, used1, used2, used3, used4, used5, team1, team2, team3, team4, team5 FROM works");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/testimonialss", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, head, txt, img, name, work FROM testimonialss");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/watch", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, headline, bacgr1, bacgr2 FROM watch");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/website", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, img, industry, service FROM website");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/sections", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, title, content FROM sections");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/faq", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, question, answer FROM faq");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/ourprojects", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, name, text FROM ourprojects");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/minds", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, work, img, facebook, twitter, inl FROM minds");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/achiev", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, data, headline, info FROM achiev");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/awre", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, date, head, text FROM awre");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/jointeam", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, head, salary, experience, deadline, text FROM jointeam");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/apply", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, step, headline, info FROM apply");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/article", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, img, headl, text FROM article");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.get("/api/contacts", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, one, two, tri FROM contacts");
    res.json(result.rows);
  } catch (err) {
    console.error("Ошибка запроса к БД:", err);
    res.status(500).send("Server error");
  }
});

app.post("/api/more", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO more (name, info) VALUES ('New Name', 'New Info') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в more:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/more2", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO more2 (name, info) VALUES ('New Name', 'New Info') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в more2:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/journey", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO journey (headline, text) VALUES ('New Headline', 'New Text') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в journey:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/ourservices", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO ourservices (img, head, txt, price) VALUES ('', 'New Service', 'Description', '0') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в services:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/works", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO works (img, headline, category, time, text, bacgr, used1, used2, used3, used4, used5, team1, team2, team3, team4, team5) VALUES ('', 'New Work', 'Category', '0', '', '', '', '', '', '', '', '', '', '', '', '') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в works:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/testimonials", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO testimonials (head, txt, img, name, work) VALUES ('New Head', 'New Text', '', 'Name', 'Position') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в testimonials:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/watch", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO watch (headline, bacgr1, bacgr2) VALUES ('New Headline', '', '') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в watch:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/website", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO website (name, img, industry, service) VALUES ('New Website', '', 'Industry', 'Service') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в website:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/sections", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO sections (title, content) VALUES ('New Title', 'New Content') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в sections:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/faq", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO faq (question, answer) VALUES ('New Question', 'New Answer') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в faq:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/projects", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO projects (img, name, text) VALUES ('', 'New Project', 'Description') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в projects:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/minds", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO minds (name, work, img, facebook, twitter, inl) VALUES ('Name', 'Position', '', '', '', '') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в minds:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/achiev", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO achiev (data, headline, info) VALUES ('0', 'New Achievement', 'Info') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в achiev:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/awre", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO awre (date, head, text) VALUES ('2024', 'New Award', 'Description') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в awre:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/jointeam", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO jointeam (img, head, salary, experience, deadline, text) VALUES ('', 'New Position', '0', '0', '2024-12-31', 'Description') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в jointeam:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/apply", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO apply (step, headline, info) VALUES ('1', 'New Step', 'Info') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в apply:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/article", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO article (img, headl, text) VALUES ('', 'New Article', 'Text') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в article:", err);
        res.status(500).send("Server error");
    }
});

app.post("/api/contacts", async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO contacts (name, one, two, tri) VALUES ('New Contact', '', '', '') RETURNING *"
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка добавления в contacts:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/more/:id", async (req, res) => {
    try {
        const { name, info } = req.body;
        const result = await pool.query(
            "UPDATE more SET name = $1, info = $2 WHERE id = $3 RETURNING *",
            [name, info, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления more:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/more2/:id", async (req, res) => {
    try {
        const { name, info } = req.body;
        const result = await pool.query(
            "UPDATE more2 SET name = $1, info = $2 WHERE id = $3 RETURNING *",
            [name, info, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления more2:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/journey/:id", async (req, res) => {
    try {
        const { headline, text } = req.body;
        const result = await pool.query(
            "UPDATE journey SET headline = $1, text = $2 WHERE id = $3 RETURNING *",
            [headline, text, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления journey:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/services/:id", async (req, res) => {
    try {
        const { img, head, txt, price } = req.body;
        const result = await pool.query(
            "UPDATE services SET img = $1, head = $2, txt = $3, price = $4 WHERE id = $5 RETURNING *",
            [img, head, txt, price, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления services:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/works/:id", async (req, res) => {
    try {
        const { img, headline, category, time, text, bacgr, used1, used2, used3, used4, used5, team1, team2, team3, team4, team5 } = req.body;
        const result = await pool.query(
            "UPDATE works SET img = $1, headline = $2, category = $3, time = $4, text = $5, bacgr = $6, used1 = $7, used2 = $8, used3 = $9, used4 = $10, used5 = $11, team1 = $12, team2 = $13, team3 = $14, team4 = $15, team5 = $16 WHERE id = $17 RETURNING *",
            [img, headline, category, time, text, bacgr, used1, used2, used3, used4, used5, team1, team2, team3, team4, team5, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления works:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/testimonials/:id", async (req, res) => {
    try {
        const { head, txt, img, name, work } = req.body;
        const result = await pool.query(
            "UPDATE testimonials SET head = $1, txt = $2, img = $3, name = $4, work = $5 WHERE id = $6 RETURNING *",
            [head, txt, img, name, work, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления testimonials:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/watch/:id", async (req, res) => {
    try {
        const { headline, bacgr1, bacgr2 } = req.body;
        const result = await pool.query(
            "UPDATE watch SET headline = $1, bacgr1 = $2, bacgr2 = $3 WHERE id = $4 RETURNING *",
            [headline, bacgr1, bacgr2, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления watch:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/website/:id", async (req, res) => {
    try {
        const { name, img, industry, service } = req.body;
        const result = await pool.query(
            "UPDATE website SET name = $1, img = $2, industry = $3, service = $4 WHERE id = $5 RETURNING *",
            [name, img, industry, service, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления website:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/sections/:id", async (req, res) => {
    try {
        const { title, content } = req.body;
        const result = await pool.query(
            "UPDATE sections SET title = $1, content = $2 WHERE id = $3 RETURNING *",
            [title, content, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления sections:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/faq/:id", async (req, res) => {
    try {
        const { question, answer } = req.body;
        const result = await pool.query(
            "UPDATE faq SET question = $1, answer = $2 WHERE id = $3 RETURNING *",
            [question, answer, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления faq:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/projects/:id", async (req, res) => {
    try {
        const { img, name, text } = req.body;
        const result = await pool.query(
            "UPDATE projects SET img = $1, name = $2, text = $3 WHERE id = $4 RETURNING *",
            [img, name, text, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления projects:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/minds/:id", async (req, res) => {
    try {
        const { name, work, img, facebook, twitter, inl } = req.body;
        const result = await pool.query(
            "UPDATE minds SET name = $1, work = $2, img = $3, facebook = $4, twitter = $5, inl = $6 WHERE id = $7 RETURNING *",
            [name, work, img, facebook, twitter, inl, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления minds:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/achiev/:id", async (req, res) => {
    try {
        const { data, headline, info } = req.body;
        const result = await pool.query(
            "UPDATE achiev SET data = $1, headline = $2, info = $3 WHERE id = $4 RETURNING *",
            [data, headline, info, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления achiev:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/awre/:id", async (req, res) => {
    try {
        const { date, head, text } = req.body;
        const result = await pool.query(
            "UPDATE awre SET date = $1, head = $2, text = $3 WHERE id = $4 RETURNING *",
            [date, head, text, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления awre:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/jointeam/:id", async (req, res) => {
    try {
        const { img, head, salary, experience, deadline, text } = req.body;
        const result = await pool.query(
            "UPDATE jointeam SET img = $1, head = $2, salary = $3, experience = $4, deadline = $5, text = $6 WHERE id = $7 RETURNING *",
            [img, head, salary, experience, deadline, text, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления jointeam:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/apply/:id", async (req, res) => {
    try {
        const { step, headline, info } = req.body;
        const result = await pool.query(
            "UPDATE apply SET step = $1, headline = $2, info = $3 WHERE id = $4 RETURNING *",
            [step, headline, info, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления apply:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/article/:id", async (req, res) => {
    try {
        const { img, headl, text } = req.body;
        const result = await pool.query(
            "UPDATE article SET img = $1, headl = $2, text = $3 WHERE id = $4 RETURNING *",
            [img, headl, text, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления article:", err);
        res.status(500).send("Server error");
    }
});

app.put("/api/contacts/:id", async (req, res) => {
    try {
        const { name, one, two, tri } = req.body;
        const result = await pool.query(
            "UPDATE contacts SET name = $1, one = $2, two = $3, tri = $4 WHERE id = $5 RETURNING *",
            [name, one, two, tri, req.params.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Ошибка обновления contacts:", err);
        res.status(500).send("Server error");
    }
});
const tables = ['more', 'more2', 'journey', 'services', 'works', 'testimonials', 'watch', 'website', 'sections', 'faq', 'projects', 'minds', 'achiev', 'awre', 'jointeam', 'apply', 'article', 'contacts'];

tables.forEach(table => {
    app.delete(`/api/${table}/:id`, async (req, res) => {
        try {
            await pool.query(`DELETE FROM ${table} WHERE id = $1`, [req.params.id]);
            res.json({ message: "Deleted successfully" });
        } catch (err) {
            console.error(`Ошибка удаления из ${table}:`, err);
            res.status(500).send("Server error");
        }
    });
});