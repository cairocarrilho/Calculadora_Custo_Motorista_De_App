-- CreateTable
CREATE TABLE "entradas" (
    "id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "ganho" DECIMAL(10,2) NOT NULL,
    "km_rodado" DECIMAL(10,2) NOT NULL,
    "horas_trabalhadas" DECIMAL(5,2) NOT NULL,
    "qtde_viagem" INTEGER,

    CONSTRAINT "entradas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saidas" (
    "id" UUID NOT NULL,
    "entrada_id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "tipo_gastoo" VARCHAR(50) NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "saidas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "saidas" ADD CONSTRAINT "saidas_entrada_id_fkey" FOREIGN KEY ("entrada_id") REFERENCES "entradas"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
